FROM node:18

RUN useradd --create-home appuser

USER appuser

WORKDIR /app

COPY app.js .

EXPOSE 3000

CMD ["node", "app.js"]