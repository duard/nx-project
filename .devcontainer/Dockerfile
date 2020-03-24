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
COPY somefile.txt .

# CMD echo 123.123.123.123 this_is_my.host >> /etc/hosts; supervisord -n;
ENTRYPOINT ["/bin/sh", "-c" , "echo 0.0.0.0   duard.abc >> /etc/hosts"]
# ENTRYPOINT ["/bin/sh", "-c" , "echo 192.168.254.10   database-server >> /etc/hosts && echo 192.168.239.62   redis-ms-server >> /etc/hosts && exec java -jar ./botblocker.jar " ]


# Portas abertas
EXPOSE 4200 7777 4211
# Set the default shell to bash instead of sh
ENV SHELL /bin/zsh

# Goibou
RUN echo "There is goiaba on ZSH shell"

CMD ["zsh"]
