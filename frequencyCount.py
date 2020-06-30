def findNthMostRepeated(nth, arr):
    if nth-1 < 0:
        print('please specify a valid parameter')
        return []
    
    hmap = {}
    result = []
    for i in range(0, len(arr)):
        if arr[i] in hmap:
            count = hmap[arr[i]]["freq"]+ 1
            hmap[arr[i]]["freq"] = count
        else:
            hmap[arr[i]] = {"value": arr[i], "freq": 1}
    
    result = sorted(hmap, key = lambda k: hmap[k]['freq'], reverse=True)

    if nth-1 >= len(result):
        print('Frequency index out of bounds!')
        return []
    else:
        return [result[nth-1], hmap[result[nth-1]]["freq"]]
    
arr = [1, 1, 2, 2, 3, 1, 1, 1, 2, 4, 5, 6, 6, 1, 4, 4, 4]
rank = 1
resultant = findNthMostRepeated(rank, arr)
if len(resultant) == 2:
    print("The #", rank, "most occurring element is", resultant[0], "which occurs", resultant[1], "times")
