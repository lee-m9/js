/**
 *  
 * Given an input stream of N integers. The task is to insert these numbers into a new stream and find the median of the stream formed by each
   insertion of X to the new stream.
   
Example 1:
    Input:
    N = 4
    X[] = 5,15,1,3
    Output:
    5
    10
    5
    4
    Explanation:Flow in stream : 5, 15, 1, 3 
    5 goes to stream --> median 5 (5) 
    15 goes to stream --> median 10 (5,15) 
    1 goes to stream --> median 5 (5,15,1) 
    3 goes to stream --> median 4 (5,15,1 3)

Example 2:

    Input:
    N = 3
    X[] = 5,10,15
    Output:
    5
    7.5
    10
    Explanation:Flow in stream : 5, 10, 15
    5 goes to stream --> median 5 (5) 
    10 goes to stream --> median 7.5 (5,10) 
    15 goes to stream --> median 10 (5,10,15)   
 */

/**
 * 
    Your Task:
    You are required to complete the class Solution. 
    It should have 2 data members to represent 2 heaps. 
    It should have the following member functions:
    insertHeap() which takes x as input and inserts it into the heap, the function should then call balanceHeaps() to balance the new heap.
    balanceHeaps() does not take any arguments. It is supposed to balance the two heaps.
    getMedian() does not take any arguments. It should return the current median of the stream.

    Expected Time Complexity : O(nlogn)
    Expected Auxilliary Space : O(n)
 */

import PriorityHeap from "./priority-heap.js";

class MedainOfStream {
    constructor() {
        this.maxHeap = new PriorityHeap(true);
        this.minHeap = new PriorityHeap();
    }

    insertHeap(num) {
        if (this.maxHeap.IsEmpty() || this.maxHeap.Top() > num) {
            this.maxHeap.Insert(num);
        } else {
            this.minHeap.Insert(num);
        }

        if (this.maxHeap.Size > this.minHeap.Size + 1) {
            this.minHeap.Insert(this.maxHeap.Extract());
        } else if (this.minHeap.Size > this.maxHeap.Size + 1) {
            this.maxHeap.Insert(this.minHeap.Extract());
        }

        this.balanceHeap();
    }

    balanceHeap() {
        this.minHeap.Heapify();
        this.maxHeap.Heapify();
        console.log(this.getMedian());
    }

    getMedian() {
        if ((this.minHeap.Size + this.maxHeap.Size) % 2 == 0) {
            return (this.minHeap.Top() + this.maxHeap.Top()) / 2;
        } else {
            return this.minHeap.Size > this.maxHeap.Size ? this.minHeap.Top() : this.maxHeap.Top();
        }
    }
}

// console.log("Median 1");
// let median = new MedainOfStream();
// median.insertHeap(5);
// median.insertHeap(15);
// median.insertHeap(1);
// median.insertHeap(3);

// console.log("Median 2");
// let median1 = new MedainOfStream();
// median1.insertHeap(5);
// median1.insertHeap(10);
// median1.insertHeap(15);
