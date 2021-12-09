import { makeAutoObservable } from 'mobx'

export default class AppStore {
    isFetching = false;
    users = [];

    constructor() {
        makeAutoObservable(this)
    };


    loadData() {
        this.isFetching = true;
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong');
                }
            })
            .then(response => {
                this.users = response;
            })
            .catch(err => console.log('Failed to fetch'))
            .finally(fin => this.isFetching = false)
    }

    funcAddNew = (value) => {
        fetch(`https://jsonplaceholder.typicode.com/users/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                id: '',
                name: value.name,
                username: "",
                email: value.email,
                address: {
                    street: "",
                    suite: "",
                    city: "",
                    zipcode: "",
                    geo: {
                        lat: "",
                        lng: ""
                    }
                },
                phone: "",
                website: value.website,
                company: {
                    name: value.company,
                    catchPhrase: "",
                    bs: ""
                }
            })
        })
            .then(response => {
                if (response.ok) {
                    this.loadData();
                } else {
                    throw new Error('Something went wrong...');
                }
            })
            .finally(fin => this.isFetching = false)
    }

    deleteUser = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            }
        })
            .then(response => {
                if (response.ok) {
                    this.loadData();
                } else {
                    throw new Error('Что-то пошло не так');
                }
            })
            .finally(fin => this.isFetching = false)
    };

    updateUser = (id, value) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                name: value.name,
                email: value.email,
                website: value.website,
                company: {
                    name: value.company,
                }
            })
        })
            .then(response => {
                if (response.ok) {
                    console.log('updated user');
                } else {
                    throw new Error('Что-то пошло не так');
                }
            })
            .finally(fin => this.isFetching = false)
    }

}