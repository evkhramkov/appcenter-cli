# Autorest configuration file for AppCenter cli
> see https://aka.ms/autorest

# moved this to autoRest.yaml
```yaml
input-file: bifrost.swagger.json
output-folder: ../src/util/apis/generated
nodejs:
  add-credentials: true
  override-client-name: AppCenterClient
  output-folder: ../src/util/apis/generated
  payload-flattening-threshold: 3
```

