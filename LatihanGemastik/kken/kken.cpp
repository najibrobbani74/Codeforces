#include<bits/stdc++.h>
using namespace std;

int main(int argc, char const *argv[])
{
    int count,k,n;
    cin>>count;
    for (size_t i = 0; i < count; i++)
    {
        cin>>k>>n;
         long long int div = n / (k-1) ;
    long long int ex = n % (k-1) ;
    long long int ans = k * div + ex ;
    if(ex == 0)
        ans -- ;
    cout << ans << endl ;
    }
           
    return 0;
}
