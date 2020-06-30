#selection sort O(n^2) worst case
def selection_sort(arr):
    print('selection sort BEGIN: ')
    for i in range(0, len(arr)-1):
        print(arr) 
        min = i 
        for j in range(i+1, len(arr)): 
            #find minimum element and place it in the beginning i to array length
            if arr[min] > arr[j]: 
                min = j             
        temp = arr[min]       
        arr[min] = arr[i]
        arr[i] = temp
    print('\n')
    print('selection sort FINAL: ')
    print(arr, '\n')

#bubble sort O(n^2)
def bubble_sort(arr):
    print('bubble sort BEGIN: ')
    for i in range(0, len(arr)-1):
        print(arr)
        for j in range(0, len(arr)-i-1):
            #swap adjacent elements
            if arr[j] > arr[j+1]:
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
    print('\n')
    print('bubble sort FINAL: ')
    print(arr, '\n')

#insertion Sort O(n^2)
def insertion_sort(arr):
    print('insertion sort BEGIN: ')
    for i in range(1, len(arr)): 
        print(arr)
        temp = arr[i] 
        # Move elements that are greater than the current iteration, to one position ahead of their current position
        j = i-1
        while j >= 0 and temp < arr[j] : 
            arr[j + 1] = arr[j] 
            j -= 1
        arr[j + 1] = temp 
    print('\n')
    print('insertion sort FINAL: ')
    print(arr, '\n')

#merge sort O(nlogn)
'''
If r > l
     1. Find the middle point to divide the array into two halves:  
             middle m = (l+r)/2
     2. Call mergeSort for first half:   
             Call mergeSort(arr, l, m)
     3. Call mergeSort for second half:
             Call mergeSort(arr, m+1, r)
     4. Merge the two halves sorted in step 2 and 3:
             Call merge(arr, l, m, r)    
'''
def merge_sort(arr):
    if len(arr) >1: 
        mid = len(arr)//2 # Finding the mid of the array 
        L = arr[:mid] # Dividing the array elements  
        R = arr[mid:] # into 2 halves 
        merge_sort(L) # Sorting the first half 
        print('LHS')
        print(L)
        merge_sort(R) # Sorting the second half 
        print('RHS')
        print(R)
        i = j = k = 0
          
        # Copy data to temp arrays L[] and R[] 
        while i < len(L) and j < len(R): 
            if L[i] < R[j]: 
                arr[k] = L[i] 
                i+=1
            else: 
                arr[k] = R[j] 
                j+=1
            k+= 1
          
        # Checking if any element was left 
        while i < len(L): 
            arr[k] = L[i] 
            i+=1
            k+=1
          
        while j < len(R): 
            arr[k] = R[j] 
            j+=1
            k+=1

#heapsort helper function
def heapify(arr, n, i): 
    largest = i # Initialize largest as root 
    l = 2 * i + 1     # left = 2*i + 1 
    r = 2 * i + 2     # right = 2*i + 2 
  
    # See if left child of root exists and is 
    # greater than root 
    if l < n and arr[i] < arr[l]: 
        largest = l 
  
    # See if right child of root exists and is 
    # greater than root 
    if r < n and arr[largest] < arr[r]: 
        largest = r 
  
    # Change root, if needed 
    if largest != i: 
        # swap 
        temp = arr[i]
        arr[i] = arr[largest]
        arr[largest] = temp
  
        # Heapify the root. 
        heapify(arr, n, largest) 
  
# The main function to sort an array of given size O(nlogn)
def heapSort(arr): 
    n = len(arr) 
    print('Heapsort begin')
    # Build a maxheap. 
    for i in range(n//2 - 1, -1, -1): 
        print(arr)
        heapify(arr, n, i) 
  
    # One by one extract elements 
    for i in range(n-1, 0, -1): 
        # swap
        print(arr)
        temp = arr[i]
        arr[i] = arr[0]
        arr[0] = temp
        heapify(arr, i, 0) 
    print('\n')
    print('heapsort FINAL: ')
    print(arr)

# This function takes last element as pivot, places 
# the pivot element at its correct position in sorted 
# array, and places all smaller (smaller than pivot) 
# to left of pivot and all greater elements to right 
# of pivot 
def partition(arr, low, high): 
    i = ( low-1 )         # index of smaller element 
    pivot = arr[high]     # pivot 
    print(arr)
    for j in range(low , high): 
        # If current element is smaller than the pivot 
        if  arr[j] < pivot:      
            # increment index of smaller element 
            i = i+1 
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
    
    temp2 = arr[i+1]
    arr[i+1] = arr[high]
    arr[high] = temp2
    return ( i+1 ) 
  
# The main function that implements QuickSort 
# arr[] --> Array to be sorted, 
# low  --> Starting index, 
# high  --> Ending index   
# Function to do Quick sort o(n^2)
def quick_sort(arr, low, high): 
    if low < high: 
        # pi is partitioning index, arr[p] is now 
        # at right place 
        pi = partition(arr, low, high)  
        # Separately sort elements before 
        # partition and after partition 
        quick_sort(arr, low, pi-1) 
        quick_sort(arr, pi+1, high) 

A = [64, 25, 12, 22, 11]
selection_sort(A)
print('-----------------------------------')
B = [5, 3, 8, 2, 1]
bubble_sort(B)
print('-----------------------------------')
C = [4, 3, 2, 10, 12, 1, 5, 6]
insertion_sort(C)
print('-----------------------------------')
print('merge sort BEGIN: ')
D = [38, 27, 43, 3, 9, 82, 10]
merge_sort(D)
print('\n')
print('merge sort FINAL: ')
print(D, '\n')
print('-----------------------------------')
E = [ 12, 11, 13, 5, 6, 7] 
heapSort(E) 
print('-----------------------------------')
print('quick sort BEGIN: ')
F = [10, 7, 8, 9, 1, 5] 
quick_sort(F, 0, len(F)-1)
print('quick sort FINAL: ')
print(F)