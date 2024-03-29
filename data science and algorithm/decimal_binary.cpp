#include <iostream>
#include <math.h>
using namespace std;
int main()
{
    int n;
    cin >> n;

    // decimal to binary converson
    /* int ans=0;
     int i=0;
     while(n!=0)
     {
         int bit = n&1;
         ans=(bit*pow(10,i))+ans;
         n=n>>1;
         i++;
     }
     cout<<"answer is:"<<ans<<endl;*/

    // binary to decimal converson
    int i = 0;
    int answer = 0;
    while (n != 0)
    {
        int digit = n % 10;
        if (digit == 1)
        {
            answer = answer + pow(2, i);
        }
        n = n /10;
        i++;
    }
    cout << answer;
}
