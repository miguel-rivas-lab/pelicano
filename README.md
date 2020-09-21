## Installation

### Installing Ruby version
> rbenv install 2.7.1

### Releasing the Birds
> git submodule init && git submodule update

### Prepairing tests

#### Selenium
> cd ~/Downloads/

> wget https://github.com/mozilla/geckodriver/releases/download/v0.24.0/geckodriver-v0.24.0-linux64.tar.gz

> tar -zxvf geckodriver-v0.24.0-linux64.tar.gz

> sudo mv geckodriver /usr/local/bin/

### Installing gems/modules
> bundle && yarn