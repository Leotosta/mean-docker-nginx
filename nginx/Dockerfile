FROM nginx:1.19-alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/sites-available/default
COPY nginx.conf /etc/nginx/conf.d/default.conf



EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]


# FROM nginx:1.19-alpine

# COPY default.conf /etc/nginx/nginx.conf
# COPY default.conf /etc/nginx/sites-available/default
