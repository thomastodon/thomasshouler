# thomas shouler

## test
```
npm test
```

## build
```
npm run build
```

## deploy
```
firebase login
firebase deploy
```

## storage
login:
```
gcloud auth login
```
__push__ local content up to remote:
```
gsutil -m rsync -d -r storage/. gs://thomasshouler-id.appspot.com
```
__pull__ remote content down to local:
```
gsutil -m rsync -d -r gs://thomasshouler-id.appspot.com storage/.
```
