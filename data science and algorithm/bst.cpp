#include<iostream>
using namespace std;
struct node
{
    int data;
    node* left,*right;

    node(int val)
    {
        data = val;
        left = NULL;
        right = NULL;
    }
};
node* insertbst(node root, int val)
{
    if(root = NULL)
    {
        return new node(val);
    }
    if(val<root->val)
    {
        root->left=insertbst(root->left,val);
    }
    else{
        root->right=insertbst(root->right,val);     
    }
    return root;
};
int main()
{
    node *root=NULL;
    root = insertbst(root,5)p;
    insertbst(root,1);
    insertbst(root,3);
    insertbst(root,4);
    insertbst(root,2);
    insertbst(root,7);
    return 0;
}