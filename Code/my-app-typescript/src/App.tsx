import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message';

const App: React.FC = () => {
  //basic type:
  const stringValue: string = 'basic type';
  const numberValue: number = 1;
  const boolValue: boolean = true;
  // const arrayValue:number[] = [1,2,3];
  const arrayValue: Array<number> = [1, 2, 3];
  //---end basic type

  //complex type 
  let aTuple: [string, number] = ["string", 123];
  console.log(aTuple[0]);
  enum enumValue { first, second = 2 };
  //注: (1) 通常支持 string 和 number. (2) 可以无需初始化值. (3) 默认是 0
  let anyValue: any = "";
  const warning = ():void => {
    //return type is null
  }
  //end complex type 


  return (
    <div className="App">
      <header className="App-header">
        <Message message='App Message'/>
        <p>
          Edit <code>src/App.tsx</code> {typeof arrayValue}.
        </p>
      </header>
    </div>
  );
}

export default App;
