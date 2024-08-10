<script setup lang="ts">
import { computed, ref } from 'vue'

type Tree = {
  id: number
  colspan: number
  rowspan: number
  children?: Tree[]
}

const tree = ref<Tree[]>([
  {
    id: 1,
    colspan: 1,
    rowspan: 1,
    children: [
      {
        id: 2,
        colspan: 1,
        rowspan: 1,
        children: [
          {
            id: 3,
            colspan: 1,
            rowspan: 1,
            children: [
              {
                id: 4,
                colspan: 1,
                rowspan: 1,
                children: [
                  {
                    id: 5,
                    colspan: 1,
                    rowspan: 1,
                  },
                  {
                    id: 6,
                    colspan: 1,
                    rowspan: 1,
                  },
                  {
                    id: 11,
                    colspan: 1,
                    rowspan: 1,
                  },
                ],
              },
              {
                id: 7,
                colspan: 1,
                rowspan: 1,
              },
            ],
          },
          {
            id: 8,
            colspan: 1,
            rowspan: 1,
            children: [
              {
                id: 9,
                colspan: 1,
                rowspan: 1,
                children: [
                  {
                    id: 10,
                    colspan: 1,
                    rowspan: 1,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 12,
    colspan: 1,
    rowspan: 1,
    children: [
      {
        id: 13,
        colspan: 1,
        rowspan: 1,
        children: [
          {
            id: 14,
            colspan: 1,
            rowspan: 1,
          },
          {
            id: 15,
            colspan: 1,
            rowspan: 1,
            children: [
              {
                id: 16,
                colspan: 1,
                rowspan: 1,
              },
              {
                id: 17,
                colspan: 1,
                rowspan: 1,
                children: [
                  {
                    id: 18,
                    colspan: 1,
                    rowspan: 1,
                  },
                  {
                    id: 19,
                    colspan: 1,
                    rowspan: 1,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 14,
        colspan: 1,
        rowspan: 1,
      },
      {
        id: 15,
        colspan: 1,
        rowspan: 1,
      },
    ],
  },
])

type Table = {
  id: number
  colspan: number
  rowspan: number
}

const tbData = computed<Table[][]>(() => {
  const result = [] as Table[][]
  const dfs = (node: Tree, pNodes?: Tree[], line?: Table[]) => {
    pNodes = [...(pNodes || []), node]
    if (!line) {
      line = []
      result.push(line)
    }
    line.push(node)
    if (node.children) {
      node.children.forEach((child, index) => {
        if (index > 0) {
          dfs(child, pNodes)
          pNodes?.forEach((pNode) => {
            pNode.rowspan = pNode.rowspan + 1
          })
        } else {
          dfs(child, pNodes, line)
        }
      })
    }
  }
  for (const node of tree.value) dfs(node)
  return result
})
</script>

<template>
  <div class="flex justify-center items-center w-screen h-screen">
    <table class="border border-solid">
      <thead>
        <th class="bg-white/20 min-w-[50px] text-center">1</th>
        <th class="bg-white/20 min-w-[50px] text-center">2</th>
        <th class="bg-white/20 min-w-[50px] text-center">3</th>
        <th class="bg-white/20 min-w-[50px] text-center">4</th>
        <th class="bg-white/20 min-w-[50px] text-center">5</th>
      </thead>
      <tbody>
        <template v-for="row in tbData">
          <tr>
            <template v-for="cell in row">
              <td :colspan="cell.colspan" :rowspan="cell.rowspan" class="bg-white/10 min-w-[50px] text-center">
                {{ cell.id }}
              </td>
            </template>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
