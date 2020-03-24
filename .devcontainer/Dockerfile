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

# Clean up
RUN apt-get autoremove -y \
  && apt-get clean -y \
  && rm -rf /var/lib/apt/lists/*

# Adicionando configurações gostosas
RUN echo "Copiando Configurações Goiabeiras"

COPY config/zshrc  ./root/.zshrc
COPY config/dev.nginx.conf ./root

# CMD echo 123.123.123.123 this_is_my.host >> /etc/hosts; supervisord -n;
# ENTRYPOINT ["/bin/sh", "-c" , "echo 0.0.0.0   duard.abc >> /etc/hosts"]
ENTRYPOINT ["/bin/zsh", "-c" , "echo 192.168.254.10   database-server >> /etc/hosts && echo 192.168.239.62   redis-ms-server >> /etc/hosts && exec java -jar ./botblocker.jar " ]

# Portas abertas
EXPOSE 4200 7777 4211

# Set the default shell to bash instead of sh
ENV SHELL /bin/zsh

# Goibou
RUN echo "# CARLOS - Meus hosts customizados" >> /etc/hosts
RUN echo "fs.inotify.max_user_watches=524288" >> /etc/sysctl.conf
RUN cat /etc/sysctl.conf
# RUN sysctl -p

CMD ["zsh"]
RUN echo "There is goiaba on ZSH shell"
RUN git clone https://github.com/denysdovhan/spaceship-prompt.git "$ZSH_CUSTOM/themes/spaceship-prompt"
# RUN ln -s "$ZSH_CUSTOM/themes/spaceship-prompt/spaceship.zsh-theme" "$ZSH_CUSTOM/themes/spaceship.zsh-theme"
RUN ln -s "$ZSH_CUSTOM/themes/spaceship-prompt/spaceship.zsh-theme" "/root/.oh-my-zsh/themes/spaceship.zsh-theme"
RUN echo "Goiabas Brancas"
# RUN source ./root/.zshrc
