import React, { Component } from 'react'
export default class fillteroddEven extends Component {
    odd = [];
    even = [];
    radomList = [];
    constructor(props) {
        super(props);
        this.filterOdd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        this.filterEven(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        this.generateRandomList(7);
    }
    filterOdd(...arr) {
        for (let i of arr) {
            if (Number(i) % 2 !== 0) {
                this.odd.push(Number(i))
            }
        }
        console.log(this.odd);
    }
    filterEven(...arr) {
        for (let i of arr) {
            if (Number(i) % 2 === 0) {
                this.even.push(i)
            }
        }
        console.log(this.even);
    }
    generateRandomList(n) {
        for (let i = 0; i < n; i++) {
            this.radomList.push(Math.floor(Math.random() * 101));
        }
        console.log(this.radomList);
    }
    render() {
        return (
            <div>
                <div>
                    <ul> Odd numbers{this.odd.map(number => <li>{number}</li>)}</ul>
                </div>
                <div>
                    <ul> Even numbers{this.even.map(number => <li>{number}</li>)}</ul>
                </div>
                <div>
                    <ul> Random numbers{this.radomList.map(number => <li>{number}</li>)}</ul>
                </div>
            </div>
        )
    }
}
