#include<bits/stdc++.h>
using namespace std;

int main(int argc, char const *argv[])
{
    int count;
    cin>>count;
    int sudut;
    for (int i = 0; i < count; i++)
    {
        cin>>sudut;
        if (360 % (180 - sudut)==0){
            cout<<"YES"<<endl;
        } else {
            cout<<"NO"<<endl;
        }        
    }
    
    return 0;
}
