FROM node:10
ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update
RUN apt-get install -y git procps zsh nano zip htop
ENV DEBIAN_FRONTEND=dialog
ENV TERM xterm-256color

# Installs
RUN npm install -g eslint
RUN npm install -g @angular/cli
RUN npm install -g @nrwl/cli
RUN npm install -g @nestjs/cli
# RUN npm install; npm audit fix; npm audit fix --force;

RUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh || true
# Clean up
RUN apt-get autoremove -y \
  && apt-get clean -y \
  && apt install fonts-hack-ttf \
  && rm -rf /var/lib/apt/lists/*

# Adicionando configurações gostosas
RUN echo "Copiando Configurações Goiabeiras"

COPY config/zshrc  ./root/.zshrc
COPY config/dev.nginx.conf ./root

ADD config/operator-mono.tar.gz ./root/.fonts/
ADD config/victor-mono.tar.gz ./root/.fonts/
RUN fc-cache -f -v ~/.fonts/victor-mono
RUN fc-cache -f -v ~/.fonts/operator-mono

ADD config/keybindings.json ./root/.vscode-server/User/keybindings.json

# Portas abertas
EXPOSE 4300 8888 4211 4212 3333

# Set the default shell to bash instead of sh
# ENV TERM xterm-256color
ENV SHELL /bin/zsh

CMD ["zsh"]
RUN echo "There is goiaba on ZSH shell"

RUN fc-cache -f -v

RUN git clone https://github.com/denysdovhan/spaceship-prompt.git "$ZSH_CUSTOM/themes/spaceship-prompt"
RUN ln -s "$ZSH_CUSTOM/themes/spaceship-prompt/spaceship.zsh-theme" "/root/.oh-my-zsh/themes/spaceship.zsh-theme"
ENTRYPOINT     sysctl -p;   fs.inotify.max_user_watches=524288;  sysctl -p;
# RUN source ./root/.zshrc
