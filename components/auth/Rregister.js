import React, { Component } from 'react'
import {View, Button, TextInput} from 'react-native'

import firebase from 'firebase'

export class Rregister extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password:'',
            name: '',
            age: '',
            number: '',
            dob: '',
            eduQual: '',
            currentJob: '',
            currentLoc: '',
        }
        this.onSignup = this.onSignup.bind(this)
    }

    onSignup(){
        const {
            email, password, name,age, number, dob,eduQual,currentJob,currentLoc
        } = this.state;

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result => {
            console.log(result)
        })
        .catch((error => {
            console.log(error)
        })
    }

  render() {
    return (
      <View>
        <TextInput
            placeholder='name'
            onChangeText={(name) => this.state({name})} 
        />
        <TextInput
            placeholder='email'
            onChangeText={(email) => this.state({email})} 
        />
        <TextInput
            secureTextEntry={true}
            placeholder='password'
            onChangeText={(password) => this.state({password})} 
        />
        <TextInput
        
            placeholder='dob'
            onChangeText={(dob) => this.state({dob})} 
        />
        <TextInput
            placeholder='age'
            onChangeText={(age) => this.state({age})} 
        />
        <TextInput
            placeholder='number'
            onChangeText={(number) => this.state({number})} 
        />
        <TextInput
            placeholder='eduQual'
            onChangeText={(eduQual) => this.state({eduQual})} 
        />
        <TextInput
            placeholder='currentJob'
            onChangeText={(currentJob) => this.state({currentJob})} 
        />
        <TextInput
            placeholder='currentLoc'
            onChangeText={(currentLoc) => this.state({currentLoc})} 
        />

        <Button
            onPress={()=> this.onSignup()}
            title="Sign Up"
        />
      </View>
    )
  }
}

export default Rregister