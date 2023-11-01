## Install Argos Native Translate Packages
```
from_code = "es"
to_code = "en"

argostranslate.package.update_package_index()
available_packages = argostranslate.package.get_available_packages()
package_to_install = next(
    filter(
        lambda x: x.from_code == from_code and x.to_code == to_code, available_packages
    )
)
argostranslate.package.install_from_path(package_to_install.download())
```
## API Keys
- [OpenAI](https://platform.openai.com/account/api-keys)
- [Azure](https://portal.azure.com/#@northeastern.onmicrosoft.com/resource/subscriptions/ead5dc9e-544c-4900-8747-c43d41114589/resourceGroups/a/providers/Microsoft.CognitiveServices/accounts/iep-translation/overview) <-Need US West Instance for PRD


