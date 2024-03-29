#include <iostream>
#include <stack>

bool validateStackSequences(int pushed[], int pushedSize, int popped[], int poppedSize) {
    std::stack<int> stack;
    int pushIdx = 0;

    for (int i = 0; i < poppedSize; ++i) {
        int num = popped[i];

        while (!stack.empty() && stack.top() == num) {
            stack.pop();
            ++pushIdx;
        }
        while (pushIdx < pushedSize && pushed[pushIdx] != num) {
            stack.push(pushed[pushIdx]);
            ++pushIdx;
        }
        if (stack.empty() || stack.top() != num) {
            return false;
        }
    }

    return true;
}

int main() {
    int pushed[] = {1, 2, 3, 4, 5};
    int popped[] = {5, 4, 2, 1, 3};
    int pushedSize = sizeof(pushed) / sizeof(pushed[0]);
    int poppedSize = sizeof(popped) / sizeof(popped[0]);

    if (validateStackSequences(pushed, pushedSize, popped, poppedSize)) {
        std::cout << "true" << std::endl;
    } else {
        std::cout << "false" << std::endl;
    }

    return 0;
}
