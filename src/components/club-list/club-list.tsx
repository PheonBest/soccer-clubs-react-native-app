import { connect } from 'react-redux'
import { AppState } from '../../state/types'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state: AppState) => ({
  clubs: state.clubList,
})
import { Dispatch } from 'redux'
import ClubListBase from './club-list-base'
import { addClub } from '../../state/club-list/actions'
import ClubListAdd from './club-list-add'

// maps all the action creators with the dispatch method
// and passes them to the component
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onAddClub: (name: string, logo: string, country: string) => {
    dispatch(addClub(name, logo, country))
  },
})

// define the smart component ClubListBase
export const ClubList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClubListBase)
