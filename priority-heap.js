class PriorityHeap {
    #MAX_HEAP = "MAX_HEAP";
    #MIN_HEAP = "MIN_HEAP";
    #_comparator;

    /**
     *
     * @param {boolean} maxHeap when `true` creates Max Heap. By Default creates Min Heap.
     */
    constructor(maxHeap = false) {
        this.heap = [];
        this.#_comparator = maxHeap ? this.#MAX_HEAP : this.#MIN_HEAP;
    }

    #_parentIndex = (index) => Math.floor((index - 1) / 2);

    #_leftChildIndex = (index) => 2 * index + 1;

    #_rightChildIndex = (index) => 2 * index + 2;

    #_swap(leftIndex, rightIndex) {
        [this.heap[rightIndex], this.heap[leftIndex]] = [this.heap[leftIndex], this.heap[rightIndex]];
    }

    #_compare(a, b) {
        switch (this.#_comparator) {
            case this.#MAX_HEAP:
                return a > b;
            case this.#MIN_HEAP:
                return a < b;
        }
    }

    /**
     *
     * @returns {number} Top element of from the heap
     */
    Top() {
        return this.heap[0];
    }

    /**
     *
     * @param {number} element
     */
    Insert(element) {
        this.heap.push(element);

        let index = this.heap.length - 1;

        while (
            index > 0 &&
            this.#_parentIndex(index) &&
            this.#_compare(this.heap[index], this.heap[this.#_parentIndex(index)])
        ) {
            this.#_swap(index, this.#_parentIndex(index));
            index = this.#_parentIndex(index);
        }
    }

    /**
     *
     * @description Removes the top element and returns it
     */
    Extract() {
        let top = this.heap.shift();
        this.heap.unshift(this.heap.pop());

        this.Heapify();
        return top;
    }

    /**
     *
     * @param {number} parentIndex
     */
    Heapify(parentIndex = 0) {
        let swapIndex = parentIndex;
        let leftIndex = this.#_leftChildIndex(parentIndex);
        let rightIndex = this.#_rightChildIndex(parentIndex);

        let heapLn = this.heap.length;
        if (leftIndex < heapLn && this.#_compare(this.heap[leftIndex], this.heap[parentIndex])) {
            swapIndex = leftIndex;
        }

        if (rightIndex < heapLn && this.#_compare(this.heap[rightIndex], this.heap[parentIndex])) {
            swapIndex = rightIndex;
        }

        if (swapIndex !== parentIndex) {
            this.#_swap(parentIndex, swapIndex);
            this.Heapify(swapIndex);
        }
    }

    /**
     *
     * @returns {boolean}
     */
    IsEmpty() {
        return this.heap.length === 0;
    }

    get Size() {
        return this.heap.length;
    }
}

export default PriorityHeap;
