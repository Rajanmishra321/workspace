/*#include <iostream>
using namespace std;
int AP(int n)
{
    int ap;
    ap = (3 * n) + 7;
    return ap;
}
int main()
{
    int n;
    cout << "enter n" << endl;
    cin >> n;
    int ans = AP(n);
    cout << "answer is :" << ans;
} */





/* #include <iostream>
using namespace std;
int find_bit(int a)
{
    int s = 0, b;
    while (a != 0)
    {
        b = (a & 1);
        s = s + b;
        a >>= 1;
    }
    return s;
}
int add_bit(int a, int b)
{
    int c;
    c = find_bit(a) + find_bit(b);
    return c;
}
int main()
{
    int a, b;
    cout << "enter a and b" << endl;
    cin >> a >> b;
    int answer = add_bit(a, b);
    cout << "answer is :" << answer;
}  */




#include<iostream>
using namespace std;
int fibonaci(int a)
{
    int c =0;;
    for(int i=0; i<+a ; i++)
    {
        c=c+i;
        
    }
    
    return c;
}
int main()
{
    int a;
    cout<<"enter a"<<endl;
    cin>>a;
    int ans = fibonaci(a);
    cout<<"answer is :"<<ans<<endl;
}