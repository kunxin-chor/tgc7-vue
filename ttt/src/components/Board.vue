<template>
  <div>
    <h1>Player: {{ currentPlayer }}</h1>
    <table>
      <tr v-for="(rows, rindex) in board" v-bind:key="rindex">
        <td
          v-for="(col, cindex) in rows"
          v-bind:key="rindex * 3 + cindex"
          @click="putSymbol(rindex, cindex)"    
        >
          {{ col }}
        </td>
      </tr>
    </table>

    <div id="message" v-if="message != ''">
      {{ message }}
      <button @click="closeMessageBox">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      gameState: "",
      currentPlayer: 1,
      message: "",
      board: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ],
      nextStep: () => {}
    };
  },
  mounted() {
    this.gameState = "new";
  },
  methods: {
    closeMessageBox: function() {
      this.message = "";
      this.nextStep();
    },
    putSymbol: function(rindex, cindex) {
      if (this.board[rindex][cindex] == "" && this.gameState == "playing") {
        this.$set(
          this.board[rindex],
          cindex,
          this.currentPlayer == 1 ? "X" : "O"
        );
        this.currentPlayer = this.currentPlayer == 1 ? 2 : 1;
        this.checkResults();
      } else {
        alert("This place is already taken");
      }
    },
    checkResults: function() {
      // compare across the rows
      for (let r of this.board) {
        if (r[0] == r[1] && r[1] == r[2] && r[0] != "") {
          this.message = `Player ${r[0]} has won`;
          this.gameState = "finished";
        }
      }

      // compare across the cols
      for (let i = 0; i < 3; i++) {
        if (
          this.board[0][i] == this.board[1][i] &&
          this.board[1][i] == this.board[2][i] &&
          this.board[0][i] != ""
        ) {
          this.message = `Player ${this.board[0][i]} has won`;
          this.gameState = "finished";
        }
      }

      // compare diagonals
      if (
        this.board[0][0] == this.board[1][1] &&
        this.board[1][1] == this.board[2][2] &&
        this.board[0][0] != ""
      ) {
        this.message = `Player ${this.board[0][0]} has won`;
        this.gameState = "finished";
      }

      if (
        this.board[0][2] == this.board[1][1] &&
        this.board[1][1] == this.board[2][0] &&
        this.board[0][2] != ""
      ) {
        this.message = `Player ${this.board[0][2]} has won`;
        this.gameState = "finished";
      }
    },
    boxStyle:function(rindex, cindex){
          if (this.board[rindex][cindex] == '') {
              return {
                  backgroundColor: 'antiquewhite'
              }
          } else {
              return {
                  backgroundColor: 'red'
              }
          }
      }
  },
  watch: {
    gameState: function() {
      if (this.gameState == "new") {
        this.message = "Begin Game";
        this.nextStep = function() {
          this.gameState = "playing";
        };
      } else if (this.gameState == "playing") {
        this.currentPlayer = 1;
        this.board = [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""]
        ];
      } else if (this.gameState == "finished") {
        this.nextStep = function() {
          this.gameState = "new";
        };
      }
    }
  },
  computed:{
     
  }
};
</script>

<style scoped>
td {
  border: 1px solid black;
  padding: 10px;
  width: 100px;
  height: 100px;
  text-align: center;
  font-size: 32px;
  cursor: pointer;
}

#message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 32px;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
}

.active {
  background-color: antiquewhite;
}

.invalid {
    background-color: salmon;
}
</style>
