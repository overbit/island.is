import { HomeScreen } from './home/home'
import { InboxScreen } from './inbox/inbox'
import { WalletScreen } from './wallet/wallet'
import { UserScreen } from './user/user'
import { LoginScreen } from './login/login'
import { AppLockScreen } from './app-lock/app-lock';
import { WalletPassScreen } from './wallet-pass/wallet-pass';
import { registerComponent } from '../utils/register-component';
import { Navigation } from 'react-native-navigation'
import { NavigationBarTitle } from '../components/navigation-bar-title/navigation-bar-title';
import { ComponentRegistry } from '../utils/navigation-registry';
import { DocumentDetailScreen } from './document-detail/document-detail'
import { StorybookScreen } from './storybook/storybook';
import { OnboardingAppLockScreen } from './onboarding/onboarding-app-lock'
import { OnboardingNotificationsScreen } from './onboarding/onboarding-notifications'

export function registerAllComponents() {
  // dev only
  registerComponent(ComponentRegistry.StorybookScreen, StorybookScreen)

  // screens
  registerComponent(ComponentRegistry.LoginScreen, LoginScreen)
  registerComponent(ComponentRegistry.OnboardingAppLockScreen, OnboardingAppLockScreen);
  registerComponent(ComponentRegistry.OnboardingNotificationsScreen, OnboardingNotificationsScreen);
  registerComponent(ComponentRegistry.HomeScreen, HomeScreen)
  registerComponent(ComponentRegistry.InboxScreen, InboxScreen)
  registerComponent(ComponentRegistry.WalletScreen, WalletScreen)
  registerComponent(ComponentRegistry.UserScreen, UserScreen)
  registerComponent(ComponentRegistry.AppLockScreen, AppLockScreen)
  registerComponent(ComponentRegistry.WalletPassScreen, WalletPassScreen);
  registerComponent(ComponentRegistry.DocumentDetailScreen, DocumentDetailScreen);

  // ui components
  Navigation.registerComponent(ComponentRegistry.NavigationBarTitle, () => NavigationBarTitle);
}
