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

# Portas abertas
EXPOSE 4200
# Set the default shell to bash instead of sh
ENV SHELL /bin/zsh
CMD ["zsh"]
