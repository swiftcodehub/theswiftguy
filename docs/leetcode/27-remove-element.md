---
title: 27. Remove Element
author:
  - name: Sravan Goud
head:
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:title
      content: 27. Remove Element
  - - meta
    - property: og:url
      content: https://theswiftguy.in/leetcode/27-remove-element
---

# 27. Remove Element

<br/>

```swift
class Solution {
    func removeElement(_ nums: inout [Int], _ val: Int) -> Int {
        nums = nums.filter { $0 != val }
        return nums.count
    }
}
```