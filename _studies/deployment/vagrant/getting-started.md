---
category: Vagrant
title: 시작하기
reference:
  title: Getting started
  url: https://www.vagrantup.com/docs/getting-started/
---


## 프로젝트 설정
```bash
mkdir vagrant_getting_started
cd vagrant_getting_started
vagrant init
```


## 박스

### 박스 설치
```bash
vagrant box add hashicorp/precise64
```

참조: [HashiCorp's Atlas box catalog](https://atlas.hashicorp.com/boxes/search)

### 박스 사용
`Vagrantfile`에 다음을 작성한다:

```ruby
Vagrant.configure("2") do |config|
  config.vm.box = "hashicorp/precise64"
end
```

버전이나 URL을 명시할 수도 있다:

```ruby
config.vm.box_version = "1.1.0"
config.vm.box_url = "http://files.vagrantup.com/precise64.box"
```


## UP 그리고 SSH

### `vagrant up`
* 우분투를 실행하는 가상머신을 생성한다.
* UI 없이 실행된다.

### `vagrant ssh`
* 가상머신에 접속한다.
* 주의: `/vagrant`가 `Vagrantfile`이 있는 호스트 경로를 공유하므로, `rm -rf /`를 입력하면 모든 파일이 지워진다.
* `CTRL+D`로 종료한다.
* `vagrant destroy`로 가상머신의 리소스 사용을 종료한다.
  - 단, 박스를 제거하는 것은 아니다. 박스를 제거하려면 `vagrant box remove` 명령어를 사용한다.


## 프로비저닝

### 아파치 설치
아래 셸 스크립트를 Vagrantfile과 같은 경로에 `bootstrap.sh`로 작성한다:

```bash
#!/usr/bin/env bash

apt-get update
apt-get install -y apache2
if ! [ -L /var/www ]; then
  rm -rf /var/www
  ln -fs /vagrant /var/www
fi
```

이후, Vagrant 파일을 편집한다.

```ruby
Vagrant.configure("2") do |config|
  config.vm.box = "hashicorp/precise64"
  config.vm.provision :shell, path: "bootstrap.sh"
end
```

이제 `vagrant up`을 명령하면, 가상머신을 생성하고 프로비저닝한다. 이미 실행 중이면 `vagrant reload --provision`을 통해 가상머신을 재시작한다.


## 네트워킹

### 포트 포워딩
포트 포워딩은 호스트 머신의 포트를 통해 공유하도록 게스트 머신에 포트를 명시하도록 허용한다. 하지만, 실제로 게스트 머신의 특정 포트에 포워드된 모든 네트워크 트래픽을 가진다.

Vagrantfile을 다음과 같이 편집한다:

```ruby
Vagrant.configure("2") do |config|
  config.vm.box = "hashicorp/precise64"
  config.vm.provision :shell, path: "bootstrap.sh"
  config.vm.network :forwarded_port, guest: 80, host: 4567
end
```

`vagrant up`, 만약 가상머신이 이미 실행 중이면 `vagrant reload`를 수행한다.

이제 브라우저에 `http://127.0.0.1:4567`를 입력하면 Vagrant가 자동으로 생성한 웹페이지를 볼 수 있다.

### 다른 네트워킹
게스트 머신에 정적 IP를 할당하거나 게스트 머신을 존재하는 네트워크에 브릿지하는 방법도 있다. 참조: [networking](https://www.vagrantup.com/docs/networking/)


## 공유

### HashiCorp's Atlas에 로그인
우선 [HashiCorp's Atlas](https://www.vagrantup.com/docs/other/atlas.html) 계정이 필요하다.

계정이 있으면 `vagrant login`로 로그인한다.

### 공유
로그인한 상태에서 `vagrant share`를 수행한다.

여기서 산출한 URL로 접속하면 아까 설정한 아파치 페이지를 볼 수 있다.

URL을 Vagrant 환경에 직접 라우팅된다.

`Ctrl+C`로 공유 세션을 종료한다.


## 분해(Teardown)
아래의 어떤 방법이든 다시 일할 준비가 되면 `vagrant up`을 수행한다.

### `vagrant suspend`
현재 실행 상태를 저장하고 멈춘다.

* 장점: 매우 빠르다. (중단과 시작에 5-10초 소요)
* 단점: 여전히 디스크 공간을 차지하며, 모든 상태를 저장하기 위해 더 많은 디스크 공간을 필요로 한다.

### `vagrant halt`
게스트 운영체제를 종료하고 게스트 머신을 끈다.

* 장점: 깨끗하게 머신을 종료한다.
* 단점: 콜드 부트로 시작하도록 시간이 필요하다. 게스트 머신이 여전히 공간을 차지한다.

### `vagrant destroy`
게스트 머신의 모든 흔적을 제거한다. 게스트 하드 디스크도 제거한다.

* 장점: No cruft
* 단점: 머신을 다시 가져오고 프로비저닝하는 시간이 필요하다.


## 프로바이더
Vagrantfile을 수정하지 않고 다음처럼 프로바이더를 선언할 수 있다:

```bash
vagrant up --provider=vmware_fusion
vagrant up --provider=aws
```


## 공유 폴더

```bash
config.vm.synced_folder "src/", "/srv/website"
```

첫 번째 파라미터는 호스트 머신, 두 번째 파라미터는 게스트 머신의 절대 경로
