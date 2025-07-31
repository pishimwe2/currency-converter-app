# Use a lightweight version of Nginx
FROM nginx:alpine

# Copy all files from your current folder to the web root of Nginx
COPY . /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
