# Get cumulative sum of a list
# e.g cumulative_sum([1,2,3,4,5]) => [1,3,6,10,15]

def cumulative_sum(arr): 
    sumArr = []
    for i in range(len(arr)):
        if i == 0:
            sumArr.append(arr[i])
        else:
            sumArr.append(arr[i]+sumArr[i-1])
    return sumArr

print(cumulative_sum([1,2,3,4,5]))