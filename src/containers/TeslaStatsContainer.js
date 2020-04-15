const mapStateToProps = (state) => {
  return {
    carstats: state.carstats
  }
}

const TeslaStatsContainer = connect(mapStateToProps, null)(TeslaStats)