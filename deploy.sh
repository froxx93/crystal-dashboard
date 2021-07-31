zip -r dist.zip dist nuxt.config.js ecosystem.config.js
scp dist.zip root@crystal.devingathome.com:~/dist.zip
ssh -t root@crystal.devingathome.com "
  cd crystal-dashboard;
  pm2 stop
  rm -rf *;
  mv ../dist.zip dist.zip;
  unzip dist.zip
  pm2 start
"
rm dist.zip
