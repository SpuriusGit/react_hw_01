import React from 'react';
import ReactDom from 'react-dom';

import './style.css';

import user from './json/user.json';
import statisticalData from './json/statistical-data.json';
import friends from './json/friends.json';
import transactions from './json/transactions.json';

import Profile from '../src/components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
ReactDom.render(
<>
    <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
    />
    <Statistics
        title="Upload stats"
        stats={statisticalData}
    />
    <FriendList
        friends={friends}
    />
    <TransactionHistory 
        transactions={transactions}
    />
</>
,document.querySelector('#root'));