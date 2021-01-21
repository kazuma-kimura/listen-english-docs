FROM squidfunk/mkdocs-material:6.0.1

ENV NODE_VERSION="12.20.1-r0"
ENV MARKDOWN_LINT_VERSION="0.24.0"

RUN apk add --no-cache nodejs=$NODE_VERSION npm=$NODE_VERSION \
  && apk add bash \
  && npm install -g markdownlint-cli@$MARKDOWN_LINT_VERSION
