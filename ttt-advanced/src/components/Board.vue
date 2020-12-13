<template>
  <div>
    <MessageBox
      :message="message"
      :visible="showMessage"
      @on_ok="closeMessageBox"
    />
    <AskForName
        :label="nameLabel"
        :visible="showGetName"
        @on_ok="getName"
    />
    <h1>Current turn: Player {{ this.currentPlayer }} ({{ this.playerNames[this.currentPlayer-1]}} )</h1>
    <table>
      <tr v-for="(rows, rindex) in board" v-bind:key="rindex">
        <Box
          v-for="(col, cindex) in rows"
          v-bind:key="rindex * 3 + cindex"
          v-bind:content="board[rindex][cindex]"
          v-bind:rindex="rindex"
          v-bind:cindex="cindex"
          @valid_move="putSymbol"
          @invalid_move="reportInvalidMove"
        />
      </tr>
    </table>
  </div>
</template>

<script>
import Box from "./Box";
import MessageBox from "./MessageBox";
import AskForName from "./AskForName";

export default {
  components: {
    Box,
    MessageBox,
    AskForName
  },
  mounted() {
    this.gameState = "new";
  },
  data: function() {
    return {
      showMessage: false,
      message: "",
      playerNames:[],
      currentPlayer: 1,
      showGetName: false,
      nameLabel:'',
      gameState: "",
      board: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ],
      nextStep: () => {}
    };
  },
  methods: {
    putSymbol: function(rindex, cindex) {
      if (this.gameState == "playing") {
        this.$set(
          this.board[rindex],
          cindex,
          this.currentPlayer == 1 ? "X" : "O"
        );
        this.currentPlayer = this.currentPlayer == 1 ? 2 : 1;
        this.checkResults();
      }
    },
    reportInvalidMove: function() {
      alert("This box is taken");
    },
    closeMessageBox: function() {
      this.message = "";
      this.showMessage = false;
      this.nextStep();
    },
    getName:function(playerName) {
        this.showGetName = false;
        this.nextStep(playerName);
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
    }
  },
  watch: {
    gameState: function() {
      if (this.gameState == "new") {
        this.message = "Begin Game";
        this.showMessage = true;
        this.nextStep = function() {
          this.gameState = "get_player1_name";
        };
      }
      if (this.gameState=="get_player1_name") {
          this.nameLabel = 'Player 1 Name:';
          this.showGetName = true;
          this.nextStep =function(playerName) {
              this.playerNames[0] = playerName;
              this.gameState="get_player2_name"
          }
      }
      if (this.gameState=='get_player2_name') {
          this.nameLabel = 'Player 2 Name:';
          this.showGetName = true;
          this.nextStep =function(playerName) {
              this.playerNames[1] = playerName;
              this.gameState="playing"
          }
      }
      if (this.gameState == "playing") {
        this.currentPlayer = 1;
        this.board = [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""]
        ];
      }
      if (this.gameState == "finished") {
        this.showMessage = true;
        this.nextStep = function() {
          this.gameState = "playing";
        };
      }
    }
  }
};
</script>

<style scoped></style>
