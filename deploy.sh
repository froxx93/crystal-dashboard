zip -r dist.zip dist nuxt.config.js
scp dist.zip root@crystal.devingathome.com:~/dist.zip
ssh -t root@crystal.devingathome.com "
  cd crystal-dashboard;
  pm2 stop
  rm -rf dist
  mv ../dist.zip dist.zip;
  unzip -o dist.zip
  rm dist.zip
  pm2 start
"
rm dist.zip
