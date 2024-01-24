#include<iostream>
using namespace std;
int main()
{
   /*int num = 2;
    cout<<endl;
    switch (num)
    {
    case 1:  cout<<"this is first case";
        break;

    case 2: cout<<"this is second case";
    
    default:
        break;
    } 
    cout<<endl;  */


    // makeing calculater using which case

   /* int a;
    int b;
    cout<<"enter a"<<endl;
    cin>>a;
    cout<<"enter b"<<endl;
    cin>>b;
    char op;
    cout<<"enter the operation you want to perform add , multiply , divide , substract "<< endl;
    cin>>op;

    switch (op)
    {
        case '+' : cout<<"a+b = "<<a+b;
        break;

        case '*' : cout<<" a*b= "<<a*b;
        break;

        case '/': cout<<" a/b = "<<a/b;
        break;

        case '-': cout<<" a-b = "<<a-b;
        break;

        default: cout<<"please enter the valid operation";

    } */

    //to find number of notes is used.

    int a;
    cout<<"enter you amount";
    cin>>a;

    int rs100, rs50 , rs20, rs1;
    switch (1)
    {
        case 1: 
        {
            cout<<"no of notes of 100 rs used is = "<<a/100<<endl;
            a=a%100;
        }

        case 2:
        {
            cout<<"no of notes of 50 rs used is = "<<a/50<<endl;
            a=a%50;
        }

        case 3:
        {
            cout<<"no of notes of 20 rs used is = "<<a/20<<endl;
            a=a%20;
        }

        case 4:
        {
            cout<<"no of notes of 1 rs used is = "<<a/1<<endl;
            break;
        }
    }


}