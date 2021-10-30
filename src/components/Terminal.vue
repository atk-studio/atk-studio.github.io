<template>
  <div id="wrapper">
    <input type="hidden" id="hiddenTerminalInput" />
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item" id="cmd-item" tabindex="0">
        <span href="#" id="command-line-wrapper">
          <span class="terminal-arrow">&gt;</span>
          <span class="pwd">{{ title }}<b>$</b></span>
          <span id="autocomplete"></span>
          <span id="command-line"></span>
          <span class="cursor"></span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Terminal",
  props: { title: String },
};
</script>

<style>
#wrapper {
  font-family: "Iosevka", monospace;
}

#cmd-item {
  z-index: 2;
  color: rgb(187, 187, 187);
  width: 235px;
  padding: 5px 5px;
  background-color: var(--terminal-bg);
  outline: none;
}

#cmd-item .cursor {
  visibility: visible !important;
}

#autocomplete {
  color: rgba(255, 255, 255, 0.336);
  position: absolute;
}

@keyframes pulse {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.cursor {
  animation: pulse 1.5s infinite;
  width: 10px;
  height: 1.25rem;
  line-height: 1.25rem;
  vertical-align: middle;
  background-color: var(--bs-success);
  display: inline-block;
  margin-bottom: 3px;
  visibility: hidden;
}

.terminal-arrow,
.pwd {
  margin-right: 5px;
}

#terminal-line {
  white-space: pre;
}
</style>
