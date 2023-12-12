{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs = { self, nixpkgs, flake-utils }: flake-utils.lib.eachDefaultSystem (system: with import nixpkgs {inherit system;}; {
    devShells.default = mkShell {
      buildInputs = [
        nodejs_20
      ];
    };
  });
}