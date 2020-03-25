FROM node:10
ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update

RUN apt-get install -y git procps zsh

ENV DEBIAN_FRONTEND=dialog

# Installs
RUN npm install -g eslint
RUN npm install -g @angular/cli
RUN npm install -g @nrwl/cli
# RUN npm install; npm audit fix; npm audit fix --force;

RUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh || true
ENV TERM xterm-256color
# Clean up
RUN apt-get autoremove -y \
  && apt-get clean -y \
  && apt install fonts-hack-ttf \
  && rm -rf /var/lib/apt/lists/*

# Adicionando configurações gostosas
RUN echo "Copiando Configurações Goiabeiras"

COPY config/zshrc  ./root/.zshrc
COPY config/dev.nginx.conf ./root
ADD config/keybindings.json ./root/.vscode-server/User/keybindings.json


COPY config/fonts/operator-mono/ ~/.fonts/operator-mono/
RUN fc-cache -f -v ~/.fonts/operator-mono

ADD config/fonts/victor-mono ~/.fonts/victor-mono/
ADD config/fonts/victor-mono ~/.fonts/

# RUN ls /root/.fonts

# Portas abertas
EXPOSE 4200 7777 4211

# Set the default shell to bash instead of sh
# ENV TERM xterm-256color

ENV SHELL /bin/zsh

# Goibou
RUN echo "# CARLOS - Meus hosts customizados" >> /etc/hosts
RUN echo "fs.inotify.max_user_watches=524288" >> /etc/sysctl.conf
# RUN cat /etc/sysctl.conf
# RUN sysctl -p

CMD ["zsh"]
RUN echo "There is goiaba on ZSH shell"
# RUN apt update && apt install  powerline fonts-powerline fonts-firacode

COPY config/fonts/operator-mono/ ~/.fonts/operator-mono/
RUN fc-cache -f -v ~/.fonts/operator-mono

ADD config/fonts/victor-mono ~/.fonts/victor-mono/

RUN git clone --depth 1 --branch release https://github.com/adobe-fonts/source-code-pro.git ~/.fonts/adobe-fonts/source-code-pro
RUN fc-cache -f -v ~/.fonts/adobe-fonts/source-code-pro

RUN git clone https://github.com/abertsch/Menlo-for-Powerline.git ~/.fonts/abertsch/Menlo-for-Powerline
RUN fc-cache -f -v ~/.fonts/abertsch/Menlo-for-Powerline
RUN fc-cache -f -v

RUN git clone https://github.com/denysdovhan/spaceship-prompt.git "$ZSH_CUSTOM/themes/spaceship-prompt"
# RUN ln -s "$ZSH_CUSTOM/themes/spaceship-prompt/spaceship.zsh-theme" "$ZSH_CUSTOM/themes/spaceship.zsh-theme"
RUN ln -s "$ZSH_CUSTOM/themes/spaceship-prompt/spaceship.zsh-theme" "/root/.oh-my-zsh/themes/spaceship.zsh-theme"
ENTRYPOINT     sysctl -p;   fs.inotify.max_user_watches=524288;  sysctl -p;

ADD config/fonts/victor-mono ~/.fonts/victor-mono/
ADD config/fonts/victor-mono ~/.fonts/
ADD config/fonts/victor-mono/ ~/.fonts/victor-mono/
ADD config/fonts/victor-mono/ ~/.fonts/

COPY config/fonts/victor-mono ~/.fonts/victor-mono/
COPY config/fonts/victor-mono ~/.fonts/
COPY config/fonts/victor-mono/ ~/.fonts/victor-mono/
COPY config/fonts/victor-mono/ ~/.fonts/

RUN echo "Goiabas Brancas"
RUN echo \\033[31mhello; echo \\033[32mworld
# RUN source ./root/.zshrc
