#include <windows.h>

LRESULT CALLBACK WndProc(HWND, UINT, WPARAM, LPARAM);

int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpCmdLine, int nCmdShow) {
    WNDCLASS wc = { 0 };
    wc.lpszClassName = L"MainFrame";
    wc.hInstance = hInstance;
    wc.lpfnWndProc = WndProc;
    wc.hbrBackground = (HBRUSH)(COLOR_BACKGROUND);
    wc.style = CS_HREDRAW | CS_VREDRAW;

    if (!RegisterClass(&wc))
        return 1;

    HWND hwnd = CreateWindow(wc.lpszClassName, L"Frame-Based App", WS_OVERLAPPEDWINDOW, 100, 100, 400, 300, NULL, NULL, hInstance, NULL);

    ShowWindow(hwnd, nCmdShow);

    MSG msg = { 0 };

    while (GetMessage(&msg, NULL, 0, 0)) {
        TranslateMessage(&msg);
        DispatchMessage(&msg);
    }

    return (int)msg.wParam;
}

LRESULT CALLBACK WndProc(HWND hwnd, UINT msg, WPARAM wParam, LPARAM lParam) {
    switch (msg) {
    case WM_COMMAND: {
        // Handle menu commands here
        break;
    }
    case WM_CREATE: {
        // Create menu
        HMENU hMenu, hSubMenu;
        hMenu = CreateMenu();
        hSubMenu = CreatePopupMenu();
        AppendMenu(hSubMenu, MF_STRING, 1, L"Option 1");
        AppendMenu(hSubMenu, MF_STRING, 2, L"Option 2");
        AppendMenu(hMenu, MF_POPUP, (UINT_PTR)hSubMenu, L"Menu");
        SetMenu(hwnd, hMenu);
        break;
    }
    case WM_DESTROY: {
        PostQuitMessage(0);
        break;
    }
    default:
        return DefWindowProc(hwnd, msg, wParam, lParam);
    }
    return 0;
}

