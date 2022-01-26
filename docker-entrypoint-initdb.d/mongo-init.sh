set -e

mongo <<EOF
use $INIT_DB

db.createUser({
  user: '$MONGO_ADMIN',
  pwd: '$MONGO_PASSWORD',
  roles: [{
    role: 'readWrite',
    db: '$INIT_DB'
  }]
})
EOF