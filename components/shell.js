import "@ui5/webcomponents-fiori/dist/ShellBar";
import "@ui5/webcomponents/dist/Avatar";

const shell = document.createElement("ui5-shellbar");
const image = document.createElement("img");
const avatar = document.createElement("ui5-avatar");

shell.primaryTitle = "UI5 Web Components";
shell.showNotifications = true;
shell.showProductSwitch = true;
shell.showCoPilot = true;

image.src = "https://sap.github.io/ui5-webcomponents/assets/images/ui5-logo.png";
image.slot = "logo";

avatar.initials = "SG";
avatar.slot = "profile";

shell.appendChild(image);
shell.appendChild(avatar);
document.getElementById("shell").appendChild(shell);