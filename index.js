import React from 'react';
import { Navigation } from 'react-native-navigation';

const HomeIcon = require('./src/assets/icons/vector-4.png');
const HistoryIcon = require('./src/assets/icons/vector-3.png');
const OrderIcon = require('./src/assets/icons/vector-2.png');
const NotificationIcon = require('./src/assets/icons/vector-1.png');
const ProfileIcon = require('./src/assets/icons/vector-0.png');

const HomeActiveIcon = require('./src/assets/icons/active/vector-4.png');
const HistoryActiveIcon = require('./src/assets/icons/active/vector-3.png');
const OrderActiveIcon = require('./src/assets/icons/active/vector-2.png');
const NotificationActiveIcon = require('./src/assets/icons/active/vector-1.png');
const ProfileActiveIcon = require('./src/assets/icons/active/vector-0.png');

const HomeTitle = "Home";
const HistoryTitle = "History";
const OrderTitle = "Order";
const NotificationTitle = "Notification";
const ProfileTitle = "Profile";

import HomeScreen from './src/pages/HomeScreen';
import HistoryScreen from './src/pages/HistoryScreen';
import ProfileScreen from './src/pages/ProfileScreen';
import NotificationScreen from './src/pages/NotificationScreen';
import OrderScreen from './src/pages/OrderScreen';

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('History', () => HistoryScreen);
Navigation.registerComponent('Order', () => OrderScreen);
Navigation.registerComponent('Notification', () => NotificationScreen);
Navigation.registerComponent('Profile', () => ProfileScreen);

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
                                    text: HomeTitle,
                                    icon: HomeIcon,
                                    selectedIcon: HomeActiveIcon,
                                }
                            }
                        }
                    },
                    {
                        stack: {
                            children: [
                                {
                                    component: {
                                        name: 'History',
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
                                    text: HistoryTitle,
                                    icon: HistoryIcon,
                                    selectedIcon: HistoryActiveIcon,
                                }
                            }
                        }
                    },
                    {
                        stack: {
                            children: [
                                {
                                    component: {
                                        name: 'Order',
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
                                    text: OrderTitle,
                                    icon: OrderIcon,
                                    selectedIcon: OrderActiveIcon,
                                }
                            }
                        }
                    },
                    {
                        stack: {
                            children: [
                                {
                                    component: {
                                        name: 'Notification',
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
                                    text: NotificationTitle,
                                    icon: NotificationIcon,
                                    selectedIcon: NotificationActiveIcon,
                                }
                            }
                        }
                    },
                    {
                        stack: {
                            children: [
                                {
                                    component: {
                                        name: 'Profile',
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
                                    selectedIcon: ProfileActiveIcon,
                                }
                            }
                        }
                    },
                ]
            }
        }
    });
});