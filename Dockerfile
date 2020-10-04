FROM squidfunk/mkdocs-material:6.0.1

ENV NODE_VERSION="12.15.0-r1"
ENV MARKDOWN_LINT_VERSION="0.24.0"

RUN apk add --no-cache nodejs=$NODE_VERSION npm=$NODE_VERSION \
  && npm install -g markdownlint-cli@$MARKDOWN_LINT_VERSION