#include<iostream>
using namespace std;
int main()
{
    int n;
    cout<<"enter the value of n"<<endl;
    cin>>n;

    // cout<<"printing the counting from 1 to n"<<endl;
    // for(int i=1; i<=n; i++)
    // {
    //     cout<<i<<endl;
    // }

    // int sum=0;
    // for(int i=1; i<=n;i++)
    // {
    //     sum=sum+i;
    // }
    //  cout<<sum<<endl;

    // fibonacci series printing here
    // int a=0;
    // int b=1;
    // for(int i=1; i<=n; i++)
    // {
    //     int nextnumber= a+b;
    //     cout<<nextnumber<<" "<<endl;
    //     a=b;
    //     b=nextnumber;
    // }


    // checking the number is prime or not
    bool isprime=1;
    for(int i=2; i<n; i++)
    {
        if(n%i==0)
        {
            // cout<<"not a prime number"<<endl;
            isprime=0;
            break;
            
        } 
        
    }
    if(isprime=0)
    {
        cout<<"it is a prime number"<<endl;
    }
    else{
        cout<<"it is not a prime number";
    }
    
    
}