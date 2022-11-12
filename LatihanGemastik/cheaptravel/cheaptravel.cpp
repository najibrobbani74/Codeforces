#include <bits/stdc++.h>
using namespace std;

int main(int argc, char const *argv[])
{
    int jml,mjml,p,mp,res;
    cin>>jml>>mjml>>p>>mp;
    res = ((jml/mjml)*mp>(jml*p)?(jml*p):(jml/mjml)*mp)+(mp>(jml%mjml)*p?(jml%mjml)*p:mp);
    cout<<res<<endl;
    return 0;
}
