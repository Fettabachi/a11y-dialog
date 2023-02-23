import '../styles/styles.css'
import A11yDialog from "./modules/A11yDialog"

const a11yDialog = new A11yDialog()

if (module.hot) {
  module.hot.accept()
}