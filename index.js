import React from 'react';
import { Navigation } from 'react-native-navigation';

const HomeIcon = require('./src/assets/icons/vector-4.png');
const HistoryIcon = require('./src/assets/icons/vector-3.png');
const OrderIcon = require('./src/assets/icons/vector-2.png');
const NotificationIcon = require('./src/assets/icons/vector-1.png');
const ProfileIcon = require('./src/assets/icons/vector-0.png');

const HomeTitle = "Home";
const HistoryTitle = "History";
const OrderTitle = "Order";
const NotificationTitle = "Notification";
const ProfileTitle = "Profile";

import HomeScreen from './src/pages/HomeScreen';
import SettingScreen from './src/pages/SettingScreen';

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Settings', () => SettingScreen);

Navigation.setDefaultOptions({
    bottomTabs: {
        titleDisplayMode: 'alwaysShow',
        animate: false,
        animateTabSelection: false
    },
    statusBar: {
        backgroundColor: 'whitesmoke',
        style: 'dark'
    }
});

Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'Home',
                            options: {
                                topBar: {
                                    visible: false,
                                    drawBehind: true,
                                    animate: false,
                                },
                            }
                        }
                    }
                ]
            },
            bottomTabs: {
                children: [
                    {
                        stack: {
                            children: [
                                {
                                    component: {
                                        name: 'Home',
                                        options: {
                                            topBar: {
                                                visible: false,
                                                drawBehind: true,
                                                animate: false,
                                            },
                                        }
                                    }
                                },
                            ],
                            options: {
                                bottomTab: {
                                    text: 'Home',
                                    icon: HomeIcon,
                                    selectedIcon: HomeIcon,
                                }
                            }
                        }
                    },
                    {
                        stack: {
                            children: [
                                {
                                    component: {
                                        name: 'Settings',
                                        options: {
                                            topBar: {
                                                visible: false,
                                                drawBehind: true,
                                                animate: false,
                                            },
                                        }
                                    }
                                },
                            ],
                            options: {
                                bottomTab: {
                                    text: ProfileTitle,
                                    icon: ProfileIcon,
                                    selectedIcon: ProfileIcon,
                                }
                            }
                        }
                    },
                ]
            }
        }
    });
});