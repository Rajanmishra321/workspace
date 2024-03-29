#include<iostream>
#include<unordered_map>
#include<list>
using namespace std;
class graph
{
    public:
    unordered_map<int,list<int>  >adj;
    void addedges(int v, int u, bool direction)
    {
        // direction = 0 is undirected graph
        // direction = 1 is directed graph

        //create diection from u to v
        adj[u].push_back(v);
        if(direction==0)
        {
            adj[v].push_back(u);
        }



    }
    void printadjlist()
    {
        for(auto i:adj)
        {
            cout<<i.first<<"->";
            for(auto j:i.second)
            {
                cout<<j<<",";
            }
            cout<<endl;
        }
    }
};
int main()
{
    int n;
    cout<<"enter the nodes "<<endl;
    cin>>n;

    int m;
    cout<<"enter the edges"<<endl;
    cin>>m;

    graph g;
    for(int i=0; i<m; i++)
    {
        int u,v;
        cin>>u>>v;
        g.addedges(u,v,0);
    }

    g.printadjlist();
    return 0;
}