#include <bits/stdc++.h>
using namespace std;

int main(int argc, char const *argv[])
{
    int lk,pr,jml=0;
    cin>>lk;
    int lko[lk];
    for (size_t i = 0; i < lk; i++)
    {
        cin>>lko[i];
    }
    sort(lko,lko+lk);
    cin>>pr;
    int pro[pr];
    for (size_t i = 0; i < pr; i++)
    {
        cin>>pro[i];
    }
    sort(pro,pro+pr);
    for (size_t i = 0; i < lk; i++)
    {
        for (size_t j = 0; j < pr; j++)
        {
            if (abs(lko[i]-pro[j])<2) 
            {
                pro[j] = 1000;
                jml++;
                break;
            }
            
        }
        
    }
    cout<<jml<<endl;


        
    
    
    
    
    return 0;
}
